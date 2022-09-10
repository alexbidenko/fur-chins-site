package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"net/smtp"
	"os"
)

type MailRequestBody struct {
	Title   string `json:"title"`
	Message string `json:"message"`
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/api/mail", MailHandler)

	headersOk := handlers.AllowedHeaders([]string{"Content-Type"})
	originsOk := handlers.AllowedOrigins([]string{"https://fur-chins.ru"})
	methodsOk := handlers.AllowedMethods([]string{"POST", "OPTIONS"})

	fmt.Println("Server is started")
	log.Fatal(http.ListenAndServe("0.0.0.0:8000", handlers.CORS(originsOk, headersOk, methodsOk)(r)))
}

func sendMail(message []byte) error {
	from := "info@fur-chins.ru"
	password := os.Getenv("EMAIL_PASSWORD")

	smtpHost := "smtp.timeweb.ru"
	smtpPort := "2525"

	auth := smtp.PlainAuth("", from, password, smtpHost)

	return smtp.SendMail(smtpHost+":"+smtpPort, auth, from, []string{"furchinchillas@gmail.com"}, message)
}

func MailHandler(w http.ResponseWriter, r *http.Request) {
	var data MailRequestBody

	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	message := []byte("From: info@fur-chins.ru\nSubject: " + data.Title + " \n\n" + data.Message)
	if err := sendMail(message); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Write([]byte(`{"status":"success"}`))
}
