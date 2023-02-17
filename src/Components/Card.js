import styles from "../Styles/card.module.css";
import PropTypes from "prop-types";

const Card = (props) => {
  const { recipe, label } = props;
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.img} src={recipe.recipe.image} alt={label} />
      </div>
      <div>
        <a href={recipe.recipe.url}>
          <h2>{label}</h2>
        </a>
        <a href={recipe.recipe.url}>
          <button className={styles.btn}>See More...</button>
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  label: PropTypes.string.isRequired
};

export default Card;
