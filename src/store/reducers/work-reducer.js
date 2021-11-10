const initialState= {
    showModalWork: false
}

const _counter = (state= initialState, action) => {
    if(action.type === "MODAL_IMAGES_TRUE"){
        return({
            showModalWork: true
        });
    } else if ( action.type === "MODAL_IMAGES_FALSE" ) {
        return({
            showModalWork: false
        });
    }
    return state;
}
export default _counter;