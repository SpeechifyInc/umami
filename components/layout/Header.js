import classNames from 'classnames';
import HamburgerButton from 'components/common/HamburgerButton';
import Link from 'components/common/Link';
import UpdateNotice from 'components/common/UpdateNotice';
import LanguageButton from 'components/settings/LanguageButton';
import ThemeButton from 'components/settings/ThemeButton';
import UserButton from 'components/settings/UserButton';
import useUser from 'hooks/useUser';
import { FormattedMessage } from 'react-intl';

import styles from './Header.module.css';

const Logo = props => {
  return (
    <svg
      width="123"
      height="24"
      viewBox="0 0 123 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M44.6634 17.9594C46.7939 17.9594 48.9606 16.8023 48.9606 14.121C48.9606 11.9172 47.5162 11.0724 46.18 10.4296L44.8981 9.84193C43.9773 9.40117 43.4717 9.18078 43.4717 8.4829C43.4717 7.82176 43.9592 7.39936 44.7898 7.39936C45.53 7.39936 46.1259 7.71157 46.9384 8.40944C47.0648 8.50127 47.2273 8.44617 47.3175 8.31762L48.5092 6.86677C48.6175 6.71984 48.5995 6.55456 48.4912 6.44437C47.4439 5.34245 46.1981 4.7364 44.6995 4.7364C42.4967 4.7364 40.7092 6.04033 40.7092 8.44617C40.7092 10.448 41.9731 11.4213 43.3092 12.0274L44.8439 12.762C45.6384 13.1293 46.18 13.3681 46.18 14.121C46.18 14.9291 45.53 15.2964 44.6092 15.2964C43.6523 15.2964 42.9661 14.8924 42.1356 14.0659C41.9731 13.9374 41.8286 13.9925 41.7203 14.121L40.5106 15.5168C40.3842 15.6637 40.3842 15.8106 40.4745 15.9208C41.2328 16.9493 42.6592 17.9594 44.6634 17.9594ZM50.9941 21.2284H53.215C53.3775 21.2284 53.5038 21.1182 53.5038 20.9529V16.8207C54.0997 17.537 54.9483 17.9594 56.0858 17.9594C58.5594 17.9594 60.2566 15.9208 60.2566 13.2395C60.2566 10.5765 58.5594 8.51964 56.0858 8.51964C54.8038 8.51964 53.9011 9.03386 53.3233 9.87866L53.2872 9.0155C53.2872 8.85021 53.1608 8.74002 52.9983 8.74002H50.9941C50.8316 8.74002 50.7233 8.85021 50.7233 9.0155V20.9529C50.7233 21.1182 50.8316 21.2284 50.9941 21.2284ZM55.49 15.4066C54.2983 15.4066 53.4677 14.5434 53.4677 13.2211C53.4677 11.9356 54.2983 11.0724 55.49 11.0724C56.6636 11.0724 57.5483 11.9356 57.5483 13.2395C57.5483 14.5618 56.6636 15.4066 55.49 15.4066ZM66.2376 17.9594C67.4834 17.9594 68.6209 17.5921 69.3792 16.8207C69.5417 16.6738 69.5417 16.5269 69.4695 16.4167L68.7292 15.3515C68.6209 15.2229 68.5487 15.1862 68.4042 15.2597C67.664 15.6821 67.0501 15.7555 66.4542 15.7555C65.1903 15.7555 64.3598 15.278 64.0528 14.3047H69.1445C69.957 14.3047 70.1917 13.7537 70.1917 12.8355C70.1917 10.5214 68.6209 8.51964 65.9126 8.51964C63.1862 8.51964 61.3626 10.5582 61.3626 13.2028C61.3626 15.9392 63.3306 17.9594 66.2376 17.9594ZM64.0167 12.358C64.2334 11.2928 65.0098 10.8337 65.9306 10.8337C66.8515 10.8337 67.5556 11.2744 67.7362 12.358H64.0167ZM76.1647 17.9594C77.4105 17.9594 78.548 17.5921 79.3063 16.8207C79.4688 16.6738 79.4688 16.5269 79.3966 16.4167L78.6563 15.3515C78.548 15.2229 78.4758 15.1862 78.3313 15.2597C77.5911 15.6821 76.9772 15.7555 76.3813 15.7555C75.1174 15.7555 74.2869 15.278 73.9799 14.3047H79.0716C79.8841 14.3047 80.1188 13.7537 80.1188 12.8355C80.1188 10.5214 78.548 8.51964 75.8397 8.51964C73.1133 8.51964 71.2896 10.5582 71.2896 13.2028C71.2896 15.9392 73.2577 17.9594 76.1647 17.9594ZM73.9438 12.358C74.1605 11.2928 74.9369 10.8337 75.8577 10.8337C76.7786 10.8337 77.4827 11.2744 77.6633 12.358H73.9438ZM85.9112 17.9594C87.3376 17.9594 88.5293 17.3166 89.2876 16.3065C89.3959 16.1779 89.3779 16.031 89.2695 15.9208L88.0237 14.7087C87.8793 14.5618 87.6807 14.5618 87.5543 14.6903C87.0668 15.1495 86.5973 15.3882 86.0015 15.3882C84.6654 15.3882 83.8709 14.3598 83.8709 13.1844C83.8709 12.0274 84.6654 11.0908 85.9654 11.0908C86.5793 11.0908 87.0487 11.3111 87.5182 11.7886C87.6626 11.9172 87.8612 11.9172 88.0057 11.7703L89.2515 10.5582C89.3598 10.448 89.3779 10.2827 89.2695 10.1725C88.5112 9.16242 87.3195 8.51964 85.839 8.51964C83.1668 8.51964 81.2167 10.5398 81.2167 13.1844C81.2167 15.8841 83.2029 17.9594 85.9112 17.9594ZM96.2696 8.51964C95.0057 8.51964 94.1932 9.16242 93.6876 10.0807V4.88332C93.6876 4.71804 93.5612 4.60784 93.3987 4.60784H91.196C91.0335 4.60784 90.9251 4.71804 90.9251 4.88332V17.4635C90.9251 17.6288 91.0335 17.739 91.196 17.739H93.3987C93.5612 17.739 93.6876 17.6288 93.6876 17.4635V12.9089C93.6876 11.7152 94.2654 11.0908 95.2224 11.0908C96.1974 11.0908 96.7029 11.7152 96.7029 12.9089V17.4635C96.7029 17.6288 96.8293 17.739 96.9918 17.739H99.1765C99.339 17.739 99.4654 17.6288 99.4654 17.4635V12.2478C99.4654 9.89703 98.1113 8.51964 96.2696 8.51964ZM102.895 7.30753C103.762 7.30753 104.394 6.62802 104.394 5.76485C104.394 4.92005 103.762 4.24054 102.895 4.24054C102.029 4.24054 101.379 4.92005 101.379 5.76485C101.379 6.62802 102.029 7.30753 102.895 7.30753ZM101.776 17.739H104.015C104.177 17.739 104.286 17.6288 104.286 17.4635V9.0155C104.286 8.85021 104.177 8.74002 104.015 8.74002H101.776C101.613 8.74002 101.505 8.85021 101.505 9.0155V17.4635C101.505 17.6288 101.613 17.739 101.776 17.739ZM107.189 17.739H109.41C109.572 17.739 109.699 17.6288 109.699 17.4635V10.9071H111.468C111.631 10.9071 111.739 10.7969 111.739 10.6316V9.0155C111.739 8.85021 111.631 8.74002 111.468 8.74002H109.699V7.84012C109.699 7.23407 109.897 6.7933 110.746 6.7933C110.945 6.7933 111.197 6.8484 111.504 6.9035C111.631 6.92186 111.739 6.9035 111.739 6.77494V4.92005C111.739 4.80986 111.685 4.6813 111.577 4.62621C111.035 4.35073 110.638 4.314 110.096 4.314C108.128 4.314 106.918 5.26899 106.918 7.47282V8.74002H105.871C105.709 8.74002 105.6 8.85021 105.6 9.0155V10.6316C105.6 10.7969 105.709 10.9071 105.871 10.9071H106.918V17.4635C106.918 17.6288 107.027 17.739 107.189 17.739ZM114.595 21.2284H116.744C116.888 21.2284 117.015 21.1549 117.069 21.008L121.763 9.05223C121.836 8.85021 121.727 8.74002 121.529 8.74002H119.29C119.145 8.74002 119.001 8.81348 118.947 8.9604L116.997 14.47L115.047 8.9604C114.993 8.81348 114.848 8.74002 114.704 8.74002H112.465C112.266 8.74002 112.158 8.85021 112.23 9.05223L115.661 17.7573L114.361 20.8978C114.27 21.1182 114.379 21.2284 114.595 21.2284Z"
        fill="#121D2B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.08443 9.0068L7.91977 7.90777C8.29844 7.40955 8.92117 7.17538 9.52495 7.30416C9.99243 7.40386 10.2924 7.87252 10.195 8.35096C10.1869 8.39055 10.1762 8.42953 10.163 8.46764C9.46904 10.4593 9.24812 11.7749 9.50025 12.4142C10.5382 11.152 15.8406 2.9218 17.5165 2.53113C18.076 2.40069 18.6329 2.75915 18.7604 3.33179C18.8035 3.52552 18.7927 3.72774 18.7293 3.91553C17.1457 8.6015 16.4753 11.435 16.718 12.4159C17.5543 11.2115 18.7965 9.59057 20.4447 7.55297C21.0637 6.7876 22.0514 6.44461 22.9977 6.66635C23.8299 6.86133 24.35 7.7098 24.1596 8.56147C24.1584 8.56706 24.1572 8.57265 24.1557 8.57825C23.5823 11.0194 23.3697 12.4476 23.518 12.8629C23.5835 12.8119 23.65 12.7596 23.7175 12.706C24.4734 12.1055 25.4198 11.8129 26.3741 11.8846L33.7788 12.4407L28.873 13.0116C27.5034 13.171 26.249 13.8723 25.378 14.9657L24.204 16.4393C23.8197 16.9218 23.2292 17.1815 22.6227 17.1347C22.02 17.0883 21.5219 16.6359 21.4051 16.0292C21.1185 14.5389 21.0725 12.7798 21.2675 10.7519C19.7944 13.0045 18.5163 16.2441 17.4331 20.4708C17.2469 21.1976 16.6051 21.7043 15.871 21.7043C15.1699 21.7043 14.5957 21.1344 14.5741 20.4172L14.2495 9.60948L11.11 15.9416C10.7832 16.6006 10.0643 16.9522 9.35802 16.7985C8.60978 16.6356 7.9908 16.1005 7.7089 15.3727L7.35711 14.4644C6.85931 13.1792 5.7358 12.2582 4.40161 12.0417C2.93441 11.8036 1.4672 11.5655 0 11.3274L3.26813 11.0909C4.77161 10.982 6.15904 10.2244 7.08443 9.0068Z"
        fill="#2137FC"
      />
    </svg>
  );
};

export default function Header() {
  const { user } = useUser();

  return (
    <>
      {user?.is_admin && !process.env.updatesDisabled && <UpdateNotice />}
      <header className={classNames(styles.header, 'row')}>
        <div className={styles.title}>
          <Logo />
        </div>
        {user && <HamburgerButton />}
        {user && (
          <div className={styles.links}>
            <Link href="/dashboard">
              <FormattedMessage id="label.dashboard" defaultMessage="Dashboard" />
            </Link>
            <Link href="/realtime">
              <FormattedMessage id="label.realtime" defaultMessage="Realtime" />
            </Link>
            <Link href="/settings">
              <FormattedMessage id="label.settings" defaultMessage="Settings" />
            </Link>
          </div>
        )}
        <div className={styles.buttons}>
          <ThemeButton />
          <LanguageButton menuAlign="right" />
          {user && <UserButton />}
        </div>
      </header>
    </>
  );
}
