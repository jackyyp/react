function ProfileCard({ description, image, title, handle }) {
  //  Destruturing
  // const title = props.title;
  // const handle = props.handle;

  //const { title , handle } = props; // eqv to above

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="this is a company logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content" style={{ color: "gray" }}>
          {description}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
