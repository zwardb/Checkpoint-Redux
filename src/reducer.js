
const initialState = {
  dogs: [
    { name: 'Taylor',  imgUrl: 'src/img/taylor.png'  },
    { name: 'Reggie',  imgUrl: 'src/img/reggie.png'  },
    { name: 'Pandora', imgUrl: 'src/img/pandora.png' }
  ],
  cats: [
    { name: 'Earl',    imgUrl: 'src/img/earl.png'   },
    { name: 'Winnie',  imgUrl: 'src/img/winnie.png' },
    { name: 'Fellini',  imgUrl: 'src/img/fellini.png' }
  ],
  // These dogs and cats are on our intial state,
  // but there are a few more things we need!
};

// Remember that reducers take in two parameters:
//  1. The (previous) state. When we use 'createStore', the previous state is undefined,
//     so, the reducer is initially invoked with undefined as the first argument.
//     This means that if we set a default parameter value, we can use that as our initial return value
//
//  2. The action object, which we get whenever we use `store.dispatch`
export default function (state = initialState, action) {

}
