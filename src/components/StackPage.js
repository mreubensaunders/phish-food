import React, { Component } from 'react';

class StackPage extends Component {
    constructor(){
        super();
    }
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "https://cdn1.stackshare.io/javascripts/client-code.js";
        script.async = true;
    
        document.body.appendChild(script);
    }
    render() {
        return (
            <div>                                
                <a frameborder="0" data-theme="light" data-layers="1,2,3,4" data-stack-embed="true" href="https://embed.stackshare.io/stacks/embed/f954dac52bfbbab96f8b93dea6e112"></a>
            </div>
        )
    }
}

export default StackPage;