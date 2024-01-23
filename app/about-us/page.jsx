import React from 'react'
import Link from 'next/link'
import Naviagtion from '../components/navigation/navigation'
import Footer from '../components/footer/footer'

export default function About() {
  return (
    <div>
      <Naviagtion />
      <section>
        {/* paragraphy */}
        <div>
          <div>
            <div>
              <span>
                Welcome to our
              </span>
              <span>
                Fountain
              </span>
            </div>
            <div className='space-y-4'>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eligendi earum ullam ea deserunt autem beatae optio atque nobis totam, ducimus ab repellendus nemo similique necessitatibus quod eveniet! Atque, rem!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sit libero earum quidem quibusdam ipsum nobis eligendi velit nam eius veniam, ullam corporis ducimus officiis vero labore eaque fugit ipsa.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rem laborum atque modi? Laudantium molestias totam adipisci quo eligendi asperiores officiis nesciunt corporis ullam consequuntur, quas minus repudiandae maxime eum.
              </div>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, laborum. Accusamus, est maiores molestias, corporis fugiat velit repellat ducimus eveniet illo saepe, culpa amet omnis quod debitis? Sint, nisi vel?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique modi nam optio adipisci ex blanditiis inventore maiores aliquid molestiae maxime natus cum voluptates est, eveniet at tempore itaque numquam.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolores repellendus numquam? Ipsa earum officiis error aperiam ea eos, culpa quam dicta optio qui officia harum recusandae vitae tempore alias!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum deleniti autem non sit debitis doloremque assumenda veritatis asperiores, vel, tempore consequatur, ut adipisci quam. Beatae quasi repellat architecto debitis.
              </div>
            </div>

            {/* Team mate pictures  */}

            <div>

              {/* image slider   */}

            </div>


            <div className='my-7'>
              <div>
                <div>
                  <div>
                    <h1>
                      Information
                    </h1>
                    <h2>
                      What we do
                    </h2>
                  </div>
                  <div>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam nesciunt ullam earum aut distinctio iste, placeat aperiam, voluptas sint sunt repellat quidem reiciendis neque reprehenderit dolorem. Praesentium, quas commodi?
                    </div>
                    <div>
                      <div className='flex space-x-4'>
                        <h1>
                          Management
                        </h1>
                        <h1>
                          Recruiting talents
                        </h1>
                        <h1>
                          Organizing
                        </h1>
                      </div>

                      {/* decription  */}

                      <div>
                        {/* management  */}
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nobis exercitationem fugiat unde sed est qui quos numquam, quo temporibus corporis iste ducimus sapiente. Quibusdam totam quas animi aliquid temporibus.
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur tenetur sunt cupiditate hic vero voluptatibus, numquam ad, iste repellendus nihil neque sapiente sed doloremque. At cupiditate hic in quos eligendi?
                        </p>

                        {/* recruiting talent  */}

                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci dolores esse, explicabo fuga repudiandae excepturi numquam magnam earum rem facilis laudantium nisi sapiente, neque beatae nihil, dicta recusandae dolorum minima.
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ratione laudantium quidem dolorem id qui quis quae incidunt quibusdam voluptatum nihil expedita veritatis vitae, assumenda, iure possimus natus atque tenetur!
                        </p>

                        {/* Organizing  */}
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique exercitationem fuga distinctio! Numquam explicabo cupiditate, exercitationem magni error dolores beatae accusantium totam mollitia aliquam eveniet modi, consectetur voluptates, autem esse?
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quasi temporibus, architecto quam quaerat quos in possimus dignissimos provident vitae dolorem dolor dolores laudantium corporis recusandae voluptatum minus odio libero.
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <Footer />
    </div>
  )
}
