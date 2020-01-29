import React from 'react';
import Modal from '../UI/Modal/Modal';

const HandleErrors = (WrappedComponent, axios) => {
	return class extends React.Component {
		constructor() {
			super();

			this.state = {
				error: null
			};

			this.reqInterceptors = axios.interceptors.request.use(req => {
				this.setState({ error: null });
				return req;
			});

			this.resInterceptors = axios.interceptors.response.use(
				res => res,
				error => {
					this.setState({ error });
				}
			);
		}

		componentWillUnmount() {
			axios.interceptors.request.eject(this.reqInterceptors);
			axios.interceptors.response.eject(this.resInterceptors);
		}

		closeModalHandler = () => {
			this.setState({ error: null });
		};

		render() {
			return (
				<>
					<Modal show={this.state.error} closeModal={this.closeModalHandler}>
						<p style={{ textAlign: 'center', margin: 0 }}>
							{this.state.error ? this.state.error.message : null}
						</p>
					</Modal>
					<WrappedComponent {...this.props} />;
				</>
			);
		}
	};
};

export default HandleErrors;
