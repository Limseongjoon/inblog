import CustomImage from '../components/CustomImage';
import Header from '../components/Header';
import Link from 'next/link';
import Footer from '../components/Footer';

const Page = () => {
  return (
    <div className="bg-white text-black">
      <Header /> 
      <div className="bg-white text-black">
        <div className="flex flex-col items-center  px-6 lg:px-12 text-black">
          <div className="flex flex-col items-center w-screen">
            <div className="h-16 md:h-32" />
            <div className="text-center hidden md:flex flex-col items-center">
              <div className="font-extrabold text-2xl md:text-5xl lg:text-6xl -tracking-normal sm:tracking-normal whitespace-nowrap">Build your <span className="text-[#10A42A]">blog in a minute</span></div>
              <div className="font-extrabold text-2xl md:text-5xl lg:text-6xl tracking-tight sm:tracking-normal -mt-2 md:-mt-5 lg:-mt-6 whitespace-nowrap">Leading customers to <span className="text-[#ff4b93]">a purchase</span></div>
            </div>
            <div className="text-center md:hidden leading-10">
              <div className="font-extrabold text-4xl tracking-tight whitespace-nowrap">Build your <span className="text-[#10A42A]">blog<br></br>in a minute</span></div>
              <div className="font-extrabold text-4xl tracking-tight whitespace-nowrap">Leading customers<br></br>to <span className="text-[#ff4b93] -mt-2 md:-mt-5 lg:-mt-8 ">a purchase</span></div>
            </div>
            <div className="h-4" />
            <div className="flex sm:hidden font-light text-tiny md:text-xl lg:text-2xl text-center tracking-tight leading-snug sm:leading-none">Provides you SEO-friendly blog infrastructure<br></br>
            with CTA buttons for conversion</div>
            <div className="hidden font-light sm:flex text-tiny md:text-xl lg:text-2xl text-center tracking-tight sm:tracking-normal">Provides you SEO-friendly blog infrastructure<br></br>
            with CTA buttons for conversion</div>
            <div className="h-12 sm:h-14"></div>
            <Link
              href="/#"
              className="text-tiny md:text-base lg:text-xl font-semibold sm:font-normal text-white bg-black px-6 sm:px-8 py-2 rounded-full"
              >
              Create your blog in 1 minute
            </Link>
            <div className="h-3 sm:h-6" />
            <div className="flex gap-3 md:gap-8 lg:gap-10 tracking-tight sm:tracking-normal">
              <div className="flex items-center">
                <CustomImage src="/images/check.png" className="w-3 sm:w-4 h-2 sm:h-3  mr-1 sm:mr-2 mb-[1px]" />
                <span className="text-xs sm:text-tiny text-[#4a4a4a]"> 1 Minute</span>
              </div>
              <div className="flex items-center">
                <CustomImage src="/images/check.png" className="w-3 sm:w-4 h-2 sm:h-3 mr-1 sm:mr-2 mb-[1px]" />
                <span className="text-xs sm:text-tiny text-[#4a4a4a]"> No credit card required</span>
              </div>
              <div className="flex items-center">
                <CustomImage src="/images/check.png" className="w-3 sm:w-4 h-2 sm:h-3 mr-1 sm:mr-2 mb-[1px]" />
              <span className="text-xs sm:text-tiny text-[#4a4a4a]"> Hassle-free</span>
              </div>
            </div>
            <div className="h-6 sm:h-14" />
            <CustomImage src="/images/searchconsole.gif" className="w-11/12 md:w-9/12 lg:w-2/3 xl:w-1/2" />
            <div className="h-16 lg:h-36" />
            <CustomImage src="/images/finallook.png" className="w-11/12 md:w-5/6 lg:w-5/6" />
          </div>
          <div className="h-24 sm:h-48" />
          <div className="lg:px-48">
            <div className="self-start">   
              <div className="relative flex py-5 items-center">
                <div className="text-[#ff4b93] font-medium pr-10">For Your Business</div>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <div className="h-4 sm:h-10" />
              <div className="font-semibold text-3xl lg:text-4xl font-Montserrat">Is building blog a Must?</div>
              <div className="h-4" />
              <div className="md:w-7/12 text-gray-400 font-light leading-snug">Expensive paid marketing and the discontinuation of third-party cookie support by Google make organic user acquisition increasingly important. Companies are turning to their own blogs and content, as well as SEO, to secure and convert users.</div>
            </div>
            <div className="h-16" />
            <div className="flex flex-col gap-3 lg:flex-row lg:gap-4 w-full">
              <div className="w-full rounded-md text-black px-8 md:px-14 py-5 sm:py-8 border-gray-200 border-solid border-2 shadow-md bg-white">
                <div className="font-SourceSerifPro text-2xl md:text-3xl lg:text-3xl">Gain More Leads</div>
                <div className="h-4" />
                <div className="text-gray-500 font-light leading-snug">B2B marketers running a blog gain 67% more leads than those who do not run a business blog.</div>
                <div className="h-4" />
                <Link
                href="https://optinmonster.com/blogging-statistics/#:~:text=77%25%20of%20internet%20users%20read,than%20they%20do%20on%20email"
                className="text-[#10A42A]"
                >
                Read More →
              </Link>
              </div>
              <div className="w-full rounded-md text-black px-8 md:px-14 py-5 sm:py-8 border-gray-200 border-solid border-2 shadow-md bg-white">
                <div className="font-SourceSerifPro text-2xl md:text-3xl lg:text-3xl">Higher Close Rate</div>
                <div className="h-4" />
                <div className="text-gray-500 font-light leading-snug">SEO leads have a 14.6% close rate compared to only 1.7% for outbound leads.</div>
                <div className="h-4" />
                <Link
                href="https://optinmonster.com/blogging-statistics/#:~:text=77%25%20of%20internet%20users%20read,than%20they%20do%20on%20email"
                className="text-[#10A42A]"
                >
                Read More →
              </Link>
              </div>
            </div>
            <div className="h-4" />
            <div className="flex flex-col gap-3 lg:flex-row lg:gap-4 w-full">
            <div className="w-full rounded-md text-black px-8 md:px-14 py-5 sm:py-8 border-gray-200 border-solid border-2 shadow-md bg-white">
                <div className="font-SourceSerifPro text-2xl md:text-3xl lg:text-3xl">Higher Organic CTR</div>
                <div className="h-4" />
                <div className="text-gray-500 font-light leading-snug">Organic search offers higher click-through rates than paid search ads. (27.6% CTR for organic vs 3.17% CTR for paid)</div>
                <div className="h-4" />
                <Link
                href="https://backlinko.com/google-ctr-stats"
                className="text-[#10A42A]"
                >
                Read More →
              </Link>
              </div>
              <div className="w-full rounded-md text-black px-8 md:px-14 py-5 sm:py-8 border-gray-200 border-solid border-2 shadow-md bg-white">
                <div className="font-SourceSerifPro text-2xl md:text-3xl lg:text-3xl">Critical Sales Funnel</div>
                <div className="h-4" />
                <div className="text-gray-500 font-light leading-snug">55% of B2B marketers consider articles as the most successful content for moving possible clients through the sales funnel.</div>
                <div className="h-4" />
                <Link
                href="https://growthbadger.com/blog-stats/"
                className="text-[#10A42A]"
                >
                Read More →
              </Link>
              </div>
            </div>
            <div className="h-32 sm:h-48" />
            <div>
              <div className="relative flex py-5 items-center">
                <div className="text-[#ff4b93] font-medium pr-10">To Start a Blog</div>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <div className="h-6 sm:h-10" />
              <div className="font-semibold text-3xl lg:text-4xl leading-tight sm:leading-none">However, building a blog can be challenging</div>
              <div className="h-4" />
              <div className="md:w-7/12 text-gray-400 font-light leading-snug">You need to build an SEO-optimized blog and content, and insert CTA buttons for user conversion. You are not a blog builder. Do not waste your precious time.</div>
              <div className="h-6" />
              <div className="flex flex-col items-center lg:flex-row gap-16 lg:gap-36 w-full text-black px-4 py-20 justify-center">
                <div className="flex flex-col gap-4">
                  <div className="flex w-64 md:w-72 h-auto">
                    <CustomImage src="/images/illustration_highcost.png" className="w-64 md:w-72 h-auto" />
                  </div>
                  <div className="flex text-sm font-semibold self-center text-center leading-snug sm:leading-none">High Cost in<br></br>Blog Building</div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-64 md:w-72 h-auto">
                    <CustomImage src="/images/illustration__notstraightforward.png" className="w-64 md:w-72 h-auto" />
                  </div>
                  <div className="text-sm font-semibold self-center text-center leading-snug sm:leading-none">Not Straight Forward<br></br>to Contents Marketing</div>
                </div>
                <div className="flex flex-col gap-2 lg:gap-4">
                  <div className="w-64 md:w-72 h-auto">
                      <CustomImage src="/images/illustration_analytics.png" className="w-64 md:w-72 h-auto" />
                    </div>
                    <div className="text-sm font-semibold self-center text-center leading-snug sm:leading-none">Difficulties in Linking<br></br>Business Analytics</div>
                  </div>
              </div>
            </div> 
            <div className="h-24 sm:h-36" />
            <div className="font-extrabold text-3xl md:text-3xl lg:text-5xl text-center leading-tight sm:leading-none"><span className="text-[#ff4b93]">Inblog</span> provides you<br className="flex sm:hidden"></br>&nbsp;a&nbsp;<span className="text-[#10A42A]">perfect blog</span></div>
            <div className="h-24 sm:h-48" />
            <div className="flex flex-col lg:flex-row w-full">
              <div className="w-full rounded-md text-black sm:px-12 md:px-14 py-8">
              <div className="text-xl lg:text-3xl font-bold leading-tight text-[#10A42A]">1</div>
              <div className="h-6 sm:h-4" />
                <div className="text-2xl lg:text-3xl font-semibold leading-tight">Link blog directly<br></br>to your website</div>
                <div className="h-2 sm:h-4" />
                <div className="text-gray-400 font-light w-8/12 leading-snug sm:leading-snug sm:text-lg">Seamless integration with your existing blog in just one minute.</div>
              </div>
              <div className="w-full rounded-md text-black">
                <CustomImage src="/images/feature_1.png" className="w-full h-auto" />
              </div>
            </div>
            <div className="h-28 sm:h-36" />
            <div className="flex sm:hidden flex-col lg:flex-row w-full items-center gap-24">
              <div className="w-full rounded-md text-black">
              <div className="text-xl lg:text-3xl font-bold leading-tight text-[#10A42A] py-3">2</div>
              <div className="h-4" />
                <div className="text-2xl lg:text-3xl font-semibold leading-tight sm:leading-none">Embed a Notion post<br></br>into your blog</div>
                <div className="h-2" />
                <div className="text-gray-400 font-light w-10/12 leading-snug sm:leading-none">With Inblog, you can easily transfer all your posts from Notion. Just copy the link and paste it.</div>
                <div className="w-full rounded-md text-black">
                <div className="h-6 sm:h-4" />
                <div className="w-full">
                <CustomImage src="/images/feature_2.png" className="w-full h-auto" />
                </div>
              </div>
              </div>
            </div>
            <div className="hidden sm:flex flex-col lg:flex-row w-full items-center gap-12 lg:gap-24">
              <div className="hidden lg:flex w-full rounded-md text-black">
                <CustomImage src="/images/feature_2.png" className="w-full h-auto" />
              </div>
              <div className="w-full rounded-md text-black">
              <div className="text-xl lg:text-3xl font-bold leading-tight text-[#10A42A]">2</div>
              <div className="h-6 sm:h-4" />
                <div className="text-2xl lg:text-3xl font-semibold leading-tight">Embed a Notion post<br></br>into your blog</div>
                <div className="h-2 sm:h-4" />
                <div className="text-gray-400 font-light w-10/12 leading-snug sm:leading-snug  sm:text-lg">With Inblog, you can easily transfer all your posts from Notion. Just copy the link and paste it.</div>
              </div>
              <div className="lg:hidden w-full rounded-md text-black">
                <CustomImage src="/images/feature_2.png" className="w-full h-auto" />
              </div>
            </div>
            <div className="h-24 sm:h-36" />
            <div className="flex flex-col lg:flex-row w-full items-center">
              <div className="w-full rounded-md text-black sm:px-12 md:px-14 py-8">
              <div className="text-xl lg:text-3xl font-bold leading-tight text-[#10A42A]">3</div>
              <div className="h-6 sm:h-4" />
                <div className="text-2xl lg:text-3xl font-semibold leading-tight">Guide to write<br></br>SEO-friendly posts</div>
                <div className="h-2 sm:h-4" />
                <div className="text-gray-400 font-light w-10/12 leading-snug sm:leading-snug sm:text-lg">Technical SEO functions such as Meta-tags, Descriptions, H1 tags, H2 tags, and more.</div>
              </div>
              <div className="w-full rounded-md text-black">
                <CustomImage src="/images/feature_3.png" className="w-full h-auto" />
              </div>
            </div>
            <div className="h-28 sm:h-36" />
            <div className="flex sm:hidden flex-col lg:flex-row w-full items-center gap-12 sm:gap-24">
            <div className="hidden md:flex w-full rounded-md text-black">
                <CustomImage src="/images/feature_4.png" className="w-full h-auto" />
              </div>
              <div className="w-full rounded-md text-black">
              <div className="text-xl lg:text-3xl font-bold leading-tight text-[#10A42A] py-3">4</div>
              <div className="h-3" />
                <div className="text-2xl lg:text-3xl font-semibold leading-tight sm:leading-none">CTA for more leads</div>
                <div className="h-2" />
                <div className="text-gray-400 font-light w-10/12 leading-snug sm:leading-none">Inblog provides you CTA buttons for each content.</div>
                <div className="w-full rounded-md text-black">
                <div className="md:hidden h-6 sm:h-4" />
                <CustomImage src="/images/feature_4.png" className="w-full h-auto" />
              </div>
              </div>
            </div>
            <div className="hidden sm:flex flex-col lg:flex-row w-full items-center gap-12 lg:gap-24">
            <div className="hidden lg:flex w-full rounded-md text-black z">
                <CustomImage src="/images/feature_4.png" className="w-full h-auto" />
              </div>
              <div className="w-full rounded-md text-black"> 
              <div className="text-xl lg:text-3xl font-bold leading-tight text-[#10A42A]">4</div>
              <div className="h-6 sm:h-4" />
                <div className="text-2xl lg:text-3xl font-semibold leading-tight sm:leading-none">CTA for more leads</div>
                <div className="h-2 sm:h-4" />
                <div className="text-gray-400 font-light w-10/12 leading-snug sm:leading-snug sm:text-lg">Inblog provides you CTA buttons for each content.</div>
              </div>
              <div className="lg:hidden w-full rounded-md text-black">
                <CustomImage src="/images/feature_4.png" className="w-full h-auto" />
              </div>
            </div>
            <div className="h-24 sm:h-36" />
            <div className="flex flex-col lg:flex-row w-full items-center">
              <div className="w-full rounded-md text-black sm:px-12 md:px-14 py-8">
              <div className="text-xl lg:text-3xl font-bold leading-tight text-[#10A42A]">5</div>
              <div className="h-6 sm:h-4" />
                <div className="text-2xl lg:text-3xl font-semibold leading-tight sm:leading-none">Business analytics</div>
                <div className="h-2 sm:h-4" />
                <div className="text-gray-400 font-light w-10/12 leading-snug sm:leading-snug sm:text-lg">Analytics that require no additional setup. Inblog displays the most crucial metrics: Views, Conversion Rate, Referrers.</div>
              </div>
              <div className="w-full rounded-md text-black">
              </div>
            </div>
          </div> 
          <div className="h-2 lg:h-12" />
            <CustomImage src="/images/analytics.png" className="w-screen lg:w-5/6" />
          <div className="-mt-36 h-36 w-full box-content bg-gradient-to-t from-white z-3" />
          <div className="-mt-36 h-36 w-full box-content bg-gradient-to-t from-white z-3" />
          <div className="h-24 sm:h-64" />
          <div className="flex flex-col items-center w-screen">
            <div className="font-semibold text-xl md:text-3xl lg:text-5xl text-center leading-snug lg:leading-none">Focus your energy on <br className="flex sm:hidden"></br>what really matters.</div>
            <div className="hidden lg:flex lg:h-4" />
            <div className="font-semibold text-xl md:text-3xl lg:text-5xl leading-snug lg:leading-none">Let us handle the hassles.</div>
            <div className="h-8 sm:h-16" />
            <Link
              href="/#"
              className="text-tiny md:text-base lg:text-xl font-semibold sm:font-normal text-white bg-black px-8 sm:px-10 py-2 rounded-full"
              >
              Start your inblog
            </Link>
          </div>
        </div>
        <div className="h-32 sm:h-64" />
        <Footer />
      </div>
    </div>
  );
};

export default Page;