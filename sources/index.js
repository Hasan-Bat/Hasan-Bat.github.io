const el1 = <h1>Hello React!!!</h1>;
       
ReactDOM.render(el1,document.getElementById('root'));

class Car extends React.Component {
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
  }

  
ReactDOM.render(<Car />, document.getElementById('car'));