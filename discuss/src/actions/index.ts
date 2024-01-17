"use server";

import * as auth from "@/auth";

// NEED TO RESOLVE SIGN OUT NOT A FUNCTION PROBLEM. WILL RETURN TO THIS LATER.
export async function signInAction() {
  return auth.signIn("github");
}
export async function signOutAction() {
  return auth.signOut();
}
