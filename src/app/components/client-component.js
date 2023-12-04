'use client'

import {serverAction} from "../actions"

export function Client() {
  return (
    <form action={serverAction}>
      <button>Submit</button>
    </form>
  )
}
