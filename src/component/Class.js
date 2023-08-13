import React from "react";

export default class Class extends React.Component {
    constructor(props){
        super(props);
        this.state = {count:0};
    }

    componentDidMount(){
        // Compnent Did Mount will be called afetr render method get called.
        //  we almost use it to fetch data that's why we can use async key word with it
        // async componentDidMount(){const data = await fetch("https:api.expmale.com")}
        console.log("Mounted");
    }

    componentDidUpdate(){
        // Component Did Update take paramaters which is (prevState, prevProps)
        // and in it we code the logic that we want when we update our var State or any thing.
        console.log("updated");
    }

    render(){
        return (
            <h1>This a class based Component</h1>
        )
    }

    componentWillUnmount(){
        // This will be called when to move to another -page- (because we use SPA I could say) -component-;
        // and we use to cleanup our tasks
        console.log("unmounted");
    }
}

// LifeSycle

// First => the constructor class getting called ==> The render method getting called ==> ComponentDidMount 
// ===> componentDidUpdate if our component got updated ==> Then componentWillUnmount immediatly before our component 
// is removed