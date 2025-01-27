'use server'

import { NextRequest } from "next/server";

export async function login(formData: FormData) {
    console.log('formData', formData)
    const body = JSON.stringify(Object.fromEntries(formData));
    const url = process.env.NEXT_API_BASE_URL + '/login'
    const request = new NextRequest(url, {
        method: "POST",
        body,
        headers: {
            "Content-Type": "application/json",
        },
    });
    return fetch(request).catch((error) => {
        console.error("Error:", error);
    });
}