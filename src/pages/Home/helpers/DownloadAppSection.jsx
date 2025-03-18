import Apple from '../../../assets/Apple.png'
import Google from '../../../assets/Google - Original.png'
function DownloadAppSection() {
  return (
    <div className=' flex flex-col items-center justify-center text-center font-bold py-10'>
        <h1 className='lg:text-5xl lg:leading-snug'>Free download app Now!</h1>
        <h1 className='lg:text-5xl lg:leading-snug'>Our App Available Free app Now!</h1>
        <div className='flex py-10 gap-x-2'>
            <button className='w-32 h-10 bg-main-text rounded-3xl flex items-center justify-center gap-2'><h6 className='text-white'>Google Play</h6><img className='w-6 h-6' src={Google}/></button>
            <button className='w-32 h-10 bg-main-text rounded-3xl flex items-center justify-center gap-2'><h6 className='text-white'>App Store</h6><img className='w-6 h-6' src={Apple}/></button>
        </div>
    </div>
  )
}

export default DownloadAppSection