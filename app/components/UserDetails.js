import React, { PropTypes } from 'react';

function UserDetails (user) {
  const { score, info } = user;
  const { name, avatar_url, login, location, company, blog, followers, following, public_repos } = info
  return (
    <div>
    {!!score && <li className="list-group-item"><h3>Score: {score}</h3></li>}
    <li className="list-group-item"> <img src={avatar_url} className="img-rounded img-responsive"/></li>
    {name && <li className="list-group-item">Name: {name}</li>}
    <li className="list-group-item">Username: {login}</li>
    {location && <li className="list-group-item">Location: {location}</li>}
    {company && <li className="list-group-item">Company: {company}</li>}
    <li className="list-group-item">Followers: {followers}</li>
    <li className="list-group-item">Following: {following}</li>
    <li className="list-group-item">Public Repos: {public_repos}</li>
    {blog && <li className="list-group-item">Blog: <a href={blog}> {blog}</a></li>}
    </div>
  )
}

UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
  })
}

export default UserDetails
