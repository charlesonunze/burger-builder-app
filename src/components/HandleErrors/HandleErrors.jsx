import React from 'react';
import Modal from '../UI/Modal/Modal';

const HandleErrors = (WrappedComponent, axios) => {
	return class extends React.Component {
		state = {
			error: null
		};

		componentDidMount() {
			axios.interceptors.request.use(req => {
				this.setState({ error: null });
				return req;
			});

			axios.interceptors.response.use(
				res => res,
				error => {
					this.setState({ error });
				}
			);
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
