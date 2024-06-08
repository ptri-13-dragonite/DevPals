import NextAuth from 'next-auth';
import { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const authOptions: NextAuthOptions = ({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.JWT_SECRET as string,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
});

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
