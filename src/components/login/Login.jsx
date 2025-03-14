import React from 'react';
import { useTranslation } from 'react-i18next';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const { t } = useTranslation();

  return (
    <div className="login-page">
      <div className="left-section">
        <div className="logo-container">
          <h1>{t('tooGoodToGo')}</h1>
          <p>{t('foodWastingSolution')}</p>
        </div>
        <img
          className="salad-image"
          src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Cobb-Salad-main.jpg"
          alt="Salad"
        />
      </div>
      <div className="right-section">
        <div className="form-container">
          <form>
            <div className="input-group">
              <label htmlFor="username">{t('username')}</label>
              <input type="text" id="username" placeholder={t('username')} />
            </div>
            <div className="input-group">
              <label htmlFor="password">{t('password')}</label>
              <input type="password" id="password" placeholder={t('password')} />
            </div>
            <div className="forgot-password">
              <a href="#forgot">{t('forgotPassword')}</a>
            </div>
            <Link to="/home" className="">
              <button type="submit" className="login-button">
                {t('login')}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
