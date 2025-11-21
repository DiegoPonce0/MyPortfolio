export default function Contact() {
  return (
    <section className="px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
        Contact Me
      </h2>

      <p className="text-neutral-700 dark:text-neutral-300 max-w-xl mx-auto mb-8">
        Have a project in mind or want to work together?  
        Feel free to reach out — I respond within 24 hours.
      </p>

      <a
        href="mailto:diego_lpz29@hotmail.com"
        className="inline-block bg-neutral-900 text-white dark:bg-white dark:text-black px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
      >
        Send Email
      </a>
    </section>
  );
}