import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBModalFooter, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
          <MDBModalFooter className='text-center bg-dark text-white w-100 d-flex justify-content-center' >
            <MDBContainer className='p-4'>
              <section className='mb-4'>
              <a className='btn btn-outline-light btn-floating m-1' href='https://www.facebook.com/rolex' role='button'>
                  <MDBIcon fab icon='facebook-f' />
                </a>  
      
                <a className='btn btn-outline-light btn-floating m-1' href='https://twitter.com/rolex' role='button'>
                  <MDBIcon fab icon='twitter' />
                </a>
      
                <a className='btn btn-outline-light btn-floating m-1' href='https://www.instagram.com/rolex/' role='button'>
                  <MDBIcon fab icon='instagram' />
                </a>
      
                <a className='btn btn-outline-light btn-floating m-1' href='https://www.linkedin.com/company/rolex' role='button'>
                  <MDBIcon fab icon='linkedin-in' />
                </a>
      
                <a className='btn btn-outline-light btn-floating m-1' href='https://www.youtube.com/rolex' role='button'>
                  <MDBIcon fab icon='youtube' />
                </a> 
                
              </section>
      
              <section className=''>
                <form action=''>
                  <div className='row d-flex justify-content-center'>
                    <div className='col-auto'>
                      <p className='pt-2'>
                        <strong>Sign up for our newsletter</strong>
                      </p>
                    </div>
      
                   
      
                    {/* <div className='col-auto'>
                      <MDBBtn outline color='light' type='submit' className='mb-4'>
                        Subscribe
                      </MDBBtn>
                    </div> */}
                  </div>
                </form>
              </section>
      
              <section className='mb-4'>
                <p>
                ЧАСЫ ROLEX — ЭТО ВНИМАНИЕ К КАЖДОЙ ДЕТАЛИ ПРИ СБОРКЕ.
                </p>
              </section>
      
              <section className=''>
                <MDBRow>
                  
                <MDBCol lg='7' md='6' className='mb-4 mb-md-0'>
                   <Link style={{textDecoration: 'none', color: 'white'}} to={'/'}>
                    <h5 className='text-uppercase'>Главная</h5>
                    </Link>
                    <ul className='list-unstyled mb-0'>
                      <li>
                        
                        <a href='/list' className='text-white'>
                          Каталог
                        </a>
                      </li>
                      <li>
                        <a href='/cart' className='text-white'>
                          Корзина
                        </a>
                      </li>
                      <li>
                        <a href='/login' className='text-white'>
                          Войти
                        </a>
                      </li>
                      <li>
                        <a href='/register' className='text-white'>
                          Зарегистрироваться
                        </a>
                      </li>
                    </ul>
                  </MDBCol>
      
                  <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                    <h5 className='text-uppercase'>О нас</h5>
      
                    <ul className='list-unstyled mb-0'>
                      <li>
                        <a href='#!' className='text-white'>
                          Cosmograph Daytona
                        </a>
                      </li>
                      <li>
                        <a href='#!' className='text-white'>
                          Птица
                        </a>
                      </li>
                      <li>
                        <a href='#!' className='text-white'>
                          Оплата
                        </a>
                      </li>
                      <li>
                        <a href='#!' className='text-white'>
                          Наши контакты
                        </a>
                      </li>
                    </ul>
                  </MDBCol>
                </MDBRow>
              </section>
              <div className='text-center p-3' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  © 2022 Copyright:
                  <a className='text-white'>
                      Chears Team
                  </a>
            </div>
            </MDBContainer>
           
          </MDBModalFooter>

  );
}

// import React from "react"

// const Footer = () => <footer className="page-footer font-small blue pt-4">
//     <div className="container-fluid text-center text-md-left">
//         <div className="row">
//             <div className="col-md-6 mt-md-0 mt-3">
//                 <h5 className="text-uppercase">Footer Content</h5>
//                 <p>Here you can use rows and columns to organize your footer content.</p>
//             </div>

//             <hr className="clearfix w-100 d-md-none pb-0"/>

//             <div className="col-md-3 mb-md-0 mb-3">
//                 <h5 className="text-uppercase">Главная</h5>
//                 <ul className="list-unstyled">
//                     <li><a href="#!">Link 1</a></li>
//                     <li><a href="#!">Link 2</a></li>
//                     <li><a href="#!">Link 3</a></li>
//                     <li><a href="#!">Link 4</a></li>
//                 </ul>
//             </div>

//             <div className="col-md-3 mb-md-0 mb-3">
//                 <h5 className="text-uppercase">Links</h5>
//                 <ul className="list-unstyled">
//                     <li><a href="#!">Link 1</a></li>
//                     <li><a href="#!">Link 2</a></li>
//                     <li><a href="#!">Link 3</a></li>
//                     <li><a href="#!">Link 4</a></li>
//                 </ul>
//             </div>
//         </div>
//     </div>

//     <div className="footer-copyright text-center py-3">© 2020 Copyright:
//         <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
//     </div>

// </footer>

// export default Footer