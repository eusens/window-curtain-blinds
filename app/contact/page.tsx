
import Image from "next/image";


function ContactPage() {
    return (
      <div className="max-w-3xl mx-auto my-10 p-6 text-center">
      {/* Company Contact Information */}
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      {/* Company Logo or Image */}
      <div className="mb-6">
        <Image
          src="https://tvgxenufqrnhvhpnhglq.supabase.co/storage/v1/object/public/temp-home-away/project-1.jpeg" // Replace with your logo path
          alt="preject 1"
          width={400}
          height={200}
        />
      </div>
      
      {/* Contact Details */}
      <div className="text-left text-lg leading-8">
        <p className="mb-4">
          <strong>Company Name:</strong> Guangzhou Newsino Industries Ltd.
        </p>
        <p className="mb-4">
          <strong>Telephone:</strong> +86-133-1879-1068
        </p>
        <p className="mb-4">
          <strong>Email:</strong> sales@eusens.com
        </p>
        <p className="mb-4">
          <strong>Website:</strong> 
          <a href="https://www.eusens.com" target="_blank" className="text-blue-500 underline">
          www.eusens.com
          </a>
        </p>
        <p className="mb-4">
          <strong>Address:</strong> 123 XH Rd Panyu Area, Guangzhou City, China
        </p>
      </div>

      {/* Optional Second Image */}
      <div className="mt-8">
        <Image
          src="https://tvgxenufqrnhvhpnhglq.supabase.co/storage/v1/object/public/temp-home-away/factory.jpeg" // Replace with your building or office image path
          alt="Company Building"
          width={600}
          height={400}
        />
      </div>
    </div>
      )
    }

export default ContactPage
