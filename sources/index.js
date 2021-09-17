const el1 = <h4>Hi Guys</h4>;   //ctl+shift+L  to edit multiple instances
       
ReactDOM.render(el1,document.getElementById('root'));

class Car extends React.Component {
    render() {
      return <h4>Hi, I am a Car!</h4>;
    }
  }

  
//ReactDOM.render(<Car />, document.getElementById('car'));