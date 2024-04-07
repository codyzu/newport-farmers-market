export default function Location() {
  return (
    <>
      <div className="section-header">Location</div>
      <div>Hwy 101 and Angle Street</div>
      <div className="">
        <iframe
          sandbox="allow-scripts"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5678.338467460222!2d-124.05433600000002!3d44.634458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c1d7ca7900a5a5%3A0xbd38e3923f2d0214!2sUS-101%20%26%20SW%20Angle%20St%2C%20Newport%2C%20OR%2097365!5e0!3m2!1sen!2sus!4v1712427764935!5m2!1sen!2sus"
          width="400"
          height="300"
          style={{border: '0'}}
          // AllowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
