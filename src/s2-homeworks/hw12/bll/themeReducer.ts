type InitStateType = {
    themeId: number
}
const initState: InitStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeActionType): InitStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {themeId: action.id}
        }

        default:
            return state
    }
}

// export const changeThemeId = (id: number): ChangeThemeActionType => ({ type: 'SET_THEME_ID', id } as const) // fix any
// export type ChangeThemeActionType = ReturnType<typeof changeThemeId>;


export const changeThemeId = (id: number): ChangeThemeActionType => ({type: 'SET_THEME_ID', id} as const) // fix any
export type ChangeThemeActionType = {
    type: 'SET_THEME_ID',
    id: number
}
