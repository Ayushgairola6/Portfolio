import gsap from 'gsap';
import Image from 'next/image';
import { useEffect } from 'react';


const TechMarquee = () => {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.to('.tech', {
                x: '-100%', duration: 60, ease: 'linear', repeat: -1

            })
        }
    }, [])

    return <>
        <div className="mt-16  overflow-hidden whitespace-nowrap   py-4">
            <div className="tech flex items-center justify-between  text-6xl font-cosiAzure  ">
                
                    <Image  className='h-24 w-24 ' src="https://www.gtech.com.tr/wp-content/uploads/2020/09/mongodb-nedir-1.png" alt="" />
             
           
                    <Image  className='h-12 w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrNVwxlBhUzwBd6H4YqdJckckasr4N6PjQw&s" alt="" />
                
                    <Image  className='h-12 w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopA7FFmbqwEw4hT_0c2dswWepiRekm17JTw&s" alt="" />
                
                <Image  className='h-12 w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZD7gtOg-aRXiYZ_ZkmYGch46UxHAygL-Pw&s" alt="" />
                
                    <Image  className='h-12 w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOoIdVnIF4UiQo3kSLqZviJQlbz0SGL3juKQ&s" alt="" />
                
       
                    <Image className='h-12 w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuFAoHUEQ7PBsW9cQCtqWbgcuJaYyCUk47_Q&s" alt="" />
            
                    <Image  className='h-12 w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s" alt="" />
          
                
                    <Image  className='h-12 w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLfG0eMaHUfZdyYtPcP5hpdsBsdhzUf3w6yw&s" alt="" />
                
                    <Image  className='h-12 w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdvSvXgwsE4HmYlK8O2wEP5xV-A0zYJLxPKA&s" alt="" />
                
            </div>
        </div>


    </>
}
export default TechMarquee;