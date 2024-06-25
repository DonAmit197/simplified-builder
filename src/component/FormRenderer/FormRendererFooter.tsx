/** @format */
import {useEffect} from 'react';
import externalLogo from '../../assets/externalformfb_logo.svg';
import externalLogoLeft from '../../assets/externalformfooterlogoleft.svg';

const FormRendererFooter = () => {
  useEffect(() => {
    const _footer = document.querySelector('#sample-footer') as HTMLElement | null;
    //console.log([_footer]);
    if (_footer) {
      const parent = _footer.offsetParent as HTMLElement | null;

      if (parent) {
        const parentStyle = {
          maxWidth: '100%',
          padding: '0',
        };

        parent.style.maxWidth = parentStyle.maxWidth;
        parent.style.padding = parentStyle.padding;
        parent.style.height = '100vh';
      }
      //Parent.style = parentStyle;
    }
  }, []);
  return (
    <footer id='sample-footer' className='one-page-footer' style={{display: 'block'}}>
      <div>
        <div className='footer-wrapper'>
          <div className='footer-column'>
            <div className='footer-logo'>
              <span className='sr-only' lang='mi'>
                <span>Te Kāwanatanga o Aotearoa</span>/
              </span>
              <img src={externalLogoLeft} width={320} alt={'New Zealand Government'} />
            </div>
            <ul className='footer_links'>
              <li>
                <a href={'https://www.businessconnect.govt.nz/privacy'} target={'_blank'}>
                  Privacy
                </a>
              </li>
              <li>
                <a href={'https://www.businessconnect.govt.nz/terms-of-use/'} target={'_blank'}>
                  Terms of use
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-column'>
            <img src={externalLogo} width={260} alt={'Powered by FormBuilder.Government '} />
            <span className='sr-only' lang='mi'>
              <span>Powered by FormBuilder.Government </span>/
            </span>
          </div>
        </div>
        <p></p>
      </div>
    </footer>
  );
};
export default FormRendererFooter;
