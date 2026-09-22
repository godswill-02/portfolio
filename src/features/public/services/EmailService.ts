import axios from "axios";


export default class EmailService {
    static async sendEmail(name: string, email: string, phone: string, message: string) {
        const response = await axios.post(
            "/api/contact-me",
            { name, email, phone, message },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );

        return response.data;
    }

    static getErrorMessage(error: unknown) {
        if (axios.isAxiosError<{ message?: string }>(error)) {
            return error.response?.data?.message ?? "Le message n'a pas pu être envoyé.";
    }

        return "Une erreur est survenue lors de l'envoi de l'email.";
    }
}