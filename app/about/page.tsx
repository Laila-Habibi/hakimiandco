
import Image from 'next/image';
import Link from 'next/link';


import {
  ArrowRight,
  Award,
  BarChart3,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";


const values = [
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and professionalism.",
    icon: ShieldCheck,
  },
  {
    title: "Client Focus",
    description:
      "Your success is our priority. We listen, understand and deliver results.",
    icon: Users,
  },
  {
    title: "Excellence",
    description:
      "We are committed to quality, accuracy and continuous improvement.",
    icon: Award,
  },
  {
    title: "Innovation",
    description:
      "We embrace modern technology and forward-thinking financial solutions.",
    icon: BarChart3,
  },
];


const team = [
  {
    name: "Ahmad Hakimi, CPA",
    role: "Managing Partner",
    image: "/images/team-1.jpg",
  },
  {
    name: "Laila Habibi, CPA",
    role: "Partner",
    image: "/images/team-2.jpg",
  },
  {
    name: "Omar Rahimi, CPA",
    role: "Senior Manager",
    image: "/images/team-3.jpg",
  },
];


export default function AboutPage(){
    return(
        <main className='bg-white text-[#102a4c]'>


            {/**************** Hero ******************/}

            <section className='relative min-h-[550px] overflow-hidden bg-[#071b2e] text-white'>
                <Image
                src={'/images/about-Hero.png'}
                alt='about image'
                fill
                priority
                className='object-cover object-center' 
                />

                <div className='absolute inset-0 bg-gradient-to-r from-[#071b2e] via-[#071b2e]/80 to-[#071b2e]/5'>
                    <div className='relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-5 py-16 lg:px-8 '>
                        <div className='max-w-7xl'>
                            <p className='text-xs font-bold uppercase tracking[0.22em] text-[#d5a44e]'>
                                Who We Are
                            </p>

                            <h1 className='mt-4 font-serif text-4xl font-bold leading-tight sm:text-4xl lg:text-5xl'>
                                 About Hakimi &amp; Co.
                            </h1>

                            <div className='mt-5 h-[2px] w-12 bg-[#d5a44e]'/>
                            
                            <p className='mt-6 max-w-lg text-sm leading-7 text-slate-200 sm:text-base'>
                                 Hakimi &amp; Co. is a trusted accounting firm dedicated to
                                 providing exceptional financial services to individuals and
                                 businesses. We combine industry expertise with a client-first
                                 approach to deliver clarity, growth and long-term value.
                            </p>

                            <Link
                              href={"/services"}
                              className='mt-7 inline-flex items-center gap-3 rounded-sm bg-[#d5a44e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#bd8d3a]'
                            >
                                Our Services 
                                <ArrowRight size={17}/>

                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/***************** Our Story **************************/}

            <section className='px-5 py-20 lg:px-8'>
              <div className='mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2'>
                <div className='relative'>
                 <div className="absolute -left-6 -top-6 hidden grid-cols-4 gap-2 lg:grid">
              {Array.from({ length: 16 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1.5 w-1.5 rounded-full bg-[#d5a44e]/60"
                />
              ))}
            </div>

                  <div className='relative h-[390px] overflow-hidden rounded-lg shadow-lg'>
                    <Image
                    src={"/images/accounting-story.png"}
                    alt='accounting story'
                    fill
                    className='objec-cover'
                    />
                  </div>

                  <div className='absolute -bottom-5 right-5 flex h-20 w-20 items-center justify-center rounded-sm bg-[#d5a44e] font-serif text-4xl font-bold text-white shadow-lg'>
                    H
                  </div>
                </div>


                <div>

                   <p className='text-xs font-bold uppercase tracking-[0.22em] text-[#c28a2d]'>
                    Our Story
                    </p>

                    <h2 className='mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl'>
                      Built on Trust
                      <br/>
                      Focused on Your Success
                      </h2>


                    <div className='mt-5 h-[2px] w-12 bg-[#d5a44e]'/>

                    <div className='mt-7 space-y-5 text-sm leading-7 text-slate-600 sm:text-base'>
                       <p>
                Founded with the vision of delivering more than just numbers,
                Hakimi &amp; Co. was built on the principles of integrity,
                transparency and excellence.
              </p>

              <p>
                We believe in forming lasting relationships with our clients by
                understanding their unique goals and providing strategic
                financial solutions that help them grow with confidence.
              </p>
                    </div>

                </div>
              </div>
            </section>





            {/******** Values **********/}
            <section className='bg-[#fbfaf7] px-5 py-20 lg:px-8'>
              <div className='mx-auto max-w-7xl'>
                <div className='text-center'>
                  <p className='text-xs font-bold uppercase tracking-[0.22em] text-[#c28a2d]'>
                    Our Values
                  </p>

                  <h2 className='mt-4 font-serif text-3xl font-bold sm:text-4xl'>
                    The Priciples That Guide Us
                  </h2>
                  
                  <div className='mx-auto mt-5 h-[2px] w-12 bg-[#d5a44e]'/>

                  
                </div>

                <div className='mt-14 grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-0'>
              

                

                  
                </div>
              </div>

            </section>

        </main>
    )
}