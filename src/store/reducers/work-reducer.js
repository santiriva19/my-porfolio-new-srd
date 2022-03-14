import data from '../../components/work/data-work/data.json'
const initialState= {
    showModalWork: false,
    sliderImages: []
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
    } else if ( action.type === "SET_SLIDER_IMAGES" ) {
        return{
            sliderImages: data[action.payload].images_slider,
            showModalWork: true
        };
    }
    return state;
}
export default _counter;