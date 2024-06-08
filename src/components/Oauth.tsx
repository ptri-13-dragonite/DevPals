import { useSession, signIn, signOut} from 'next-auth/react';

function OauthButtons() {

  return (
    <div className="flex flex-col items-center space-y-4">
      <button type="button" className="btn btn-wide" onClick={() => signIn('github')}>Connect with GitHub</button>
    </div>
  );
}

export default OauthButtons;
