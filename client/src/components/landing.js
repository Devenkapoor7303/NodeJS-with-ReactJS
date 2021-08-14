import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom"

class Landing extends React.Component{
    renderContent(){
        if(this.props.auth){
            return <Link to="/surveys" className="btn red">DashBoard</Link>
        }
    }
    render(){
        return(
            
            <div style={{textAlign:"center"}}>
                <h1>
                    Emaily!
                </h1>
                Collect feedback form your users
                <br></br>
                {this.renderContent()}
            </div>
        );
    }
} 

function mapStateToProps({auth}){
    return {auth}
}

export default connect(mapStateToProps)(Landing);