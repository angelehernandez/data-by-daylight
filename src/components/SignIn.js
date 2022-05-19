import React from 'react';
import { Button } from 'react-bootstrap';
import { signInWithGoogle, signOut, useUserState } from '../utilities/firebase';

const SignInButton = ({}) => {
    const [user] = useUserState();

    const handleSignOut = () => {
        signOut();
    }

    return (
        <div className="login">
            <Button
                className="mt-3 mb-2"
                variant="primary"
                style={{
                    width: "fit-content",
                    whiteSpace: "nowrap"
                }}
                onClick={() => user ? handleSignOut() : signInWithGoogle()}>
          {user ? "Sign Out" : "Sign In"}
        </Button>
        </div>
    )
}

export default SignInButton;