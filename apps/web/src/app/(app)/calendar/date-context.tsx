import { atom, useAtom, useAtomValue } from 'jotai'

export const activeDateAtom = atom(new Date())
export const useActiveDate = () => useAtom(activeDateAtom)
export const useActiveDateValue = () => useAtomValue(activeDateAtom)
