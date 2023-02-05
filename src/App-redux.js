import React from "react";
import {connect} from "react-redux"

//декоратор
//коннект принимает функцию и возвращает функцию?
class ReduxApp extends React.Component {
  render() {
    console.log(this.props);
    return <div></div>;
  }
}


//коннект принимает функцию и возвращает функцию?
export default connect(
    //перебирает стейт стора в пропсы компонента
    //mapStateToProps
    (state) => ({}),
  
    //функция инициализирует событие по которому будет изменяться стор
    //mapDispatchToProps
    (dispatch) => ({})
  )(ReduxApp);
