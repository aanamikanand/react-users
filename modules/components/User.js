import React from 'react'
import { Link } from 'react-router'

const User = ({ id, first_name, last_name, phone_number, deleteUser }) => (
	<li>
		<div className="card #311b92 deep-purple darken-4">
			<div className="card-content white-text">
				<span className="card-title">{first_name}</span>
				<table className="table">
					<thead>
						<tr>
							<th>Fullname</th>
							<th>Phone No.</th>
						</tr>
					</thead>	
					<tbody>
						<tr>
							<td>{`${first_name} ${last_name}`}</td>
							<td>{phone_number}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="card-action">
				<Link to={`/users/${id}`}>Show</Link>
				<a onClick={() => deleteUser(id)} href="#">Delete</a>
			</div>
		</div>
	</li>
)

export default User
