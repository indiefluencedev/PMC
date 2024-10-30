import parse from 'html-react-parser';

const ContactCard = ({img,Title,Content}) => {
    return (
        <div className="col-xl-6">
        <div className="cs_iconbox cs_style_3">
          <div className="cs_iconbox_icon cs_center">
            <img src={img} alt="Icon" />
          </div>
          <div className="cs_iconbox_right">
            <h3 className="cs_fs_20 cs_medium cs_mb_5">{Title}</h3>
            <p className="mb-0">{parse(Content)}</p>
          </div>
        </div>
      </div>
    );
};

export default ContactCard;