const e = React.createElement;

const AppNav = () => (
   <nav class="navbar navbar-dark bg-dark">
       <a class="navbar-brand" href="#">Blog-A</a>
       <a role="button" class="btn btn-outline-info navbar-btn" href="/login">Login</a>
   </nav>
);

class Home extends React.Component {
   constructor(props) {
       super(props);
   }

   render() {
       return (
           <div>
               <AppNav />
               <div class="card mt-4" Style="width: 80%;">
                   <div class="card-body">
                       You gotta log in to see what's cookin...
         </div>
               </div>
           </div>
       );
   }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Home), domContainer);
