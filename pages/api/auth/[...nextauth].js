import NextAuth from 'next-auth'
import OktaProvider from "next-auth/providers/okta"
// import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    secret: process.env.SECRET,
    providers: [
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID,
        //     clientSecret: process.env.GOOGLE_SECRET,
        // }),
        OktaProvider({
            clientId: process.env.OKTA_CLIENT_ID,
            clientSecret: process.env.OKTA_CLIENT_SECRET,
            issuer: process.env.OKTA_ISSUER
        })
    ],
    theme: {
        colorScheme: "light",
    },
    callbacks: {
        async jwt({ token }) {
            token.userRole = "admin"
            return token
        },
    },
});

