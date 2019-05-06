import { Action } from "rxjs/internal/scheduler/Action";

const INITIAL_STATE = [];

export default function favorities(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_FAVORITE":
            return [
                ...state,
                {
                    id: Math.random,
                    name: "facebook",
                    description: "A declarative, efficient, and flexible .",
                    url: "http://github.com/facebook/react"
                }
            ];
        default:
            return state;
    }
}
