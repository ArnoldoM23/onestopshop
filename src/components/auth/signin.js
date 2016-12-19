import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

const ROOT_URL = 'http://localhost:3090'

class SignIn extends Component {

	handleFormSubmit({email, password}){
		this.props.signIn({ email, password });
	}

	renderAlert(){
		if(this.props.errorMessage){
			return(
				<div>
					<strong>Ooop!!</strong>{this.props.errorMessage}
				</div>
			)
		}
	}

	render(){
		const { handleSubmit, fields: { email, password } } = this.props;

		return (
			<section className='authContainer'>
				<div className='row'>
					<h2>Welcome back please sign in</h2>
				</div>
				<div className='logs'>
					<form className='contact-form' onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
						<fieldset >
							<label> Email:</label>
							<input {...email } type='email' className='form-control' />
						</fieldset>
						<fieldset >
							<label> Password:</label>
							<input {...password } type='password' className='form-control' />
						</fieldset>
						<fieldset  >
							<input type='submit' value='Sign In'/>
						</fieldset>
						<div className='logBtnContainer'>
							<a href={`${ROOT_URL}/auth/facebook`} className='btn btn-fb' ><i className='.icon-big ion-social-facebook'></i>&nbsp; Sign In</a>
							<a href={`${ROOT_URL}/auth/google`} className='btn btn-gplus'><i className=' .icon-big ion-social-googleplus'></i>&nbsp; Sign In</a>
							<Link className='' to='/signup'>Sign Up</Link>
						</div>	
					</form>
				</div>
			</section>
		);
	}
};

function mapStateToProps(state){
	return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
},mapStateToProps, actions)(SignIn);