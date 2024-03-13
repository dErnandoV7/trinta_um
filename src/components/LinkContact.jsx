const LinkContact = ({url, icon_class}) => {
  return (
    <a href={url} target="_blank" className="link-contact">
      <li>
        <i className={icon_class}></i>
      </li>
    </a>
  );
};

export default LinkContact;
