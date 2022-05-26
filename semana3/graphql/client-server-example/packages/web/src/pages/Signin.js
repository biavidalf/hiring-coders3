import React from 'react';

export default function Signin() {
    return (
        <form action="/authenticated" method="POST">
            <fieldset>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" inputMode="email" name="email" autoComplete="username" />
            </fieldset>
            
            <fieldset>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" autoComplete="current-password" />
            </fieldset>

            <button type="submit">Sign in</button>
        </form>
    )
}
    