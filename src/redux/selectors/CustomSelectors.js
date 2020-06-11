export const getCurrentUser = (state) => state.auth.currentUser;
export const getCurrentMessagesQuery = (state) => {
    return state.messages.queryResult === null ?
        null :
        state.messages.queryResult.data;
}
export const getCurrentRoomsQuery = (state) =>  { 
    return state.rooms.queryResult === null ?
        null :
        state.rooms.queryResult.data;
}
export const getCurrentUsersQuery = (state) => {
    return state.users.queryResult === null ?
        null:
        state.users.queryResult.data 
    }
export const getRoomTypeFilter = (state) => state.chat.roomTypeFilter;
export const getRoomId = (state) => state.chat.roomId;
