import { atom } from "recoil";

const coinState = atom({
    key: 'coinState',
    default: []
})

export default coinState;