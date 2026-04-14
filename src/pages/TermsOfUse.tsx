import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-10" style={{ fontFamily: "var(--font-heading)" }}>
          AiBlogs Terms of Use
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed text-[15px]">
          <Section title="1. Introduction">
            <p>Welcome to EarningSites.net.</p>
            <p>The platform is continuously evolving and may be subject to updates, improvements, fixes, and changes over time. As part of this process, features, functionality, and performance may be modified, improved, or adjusted at any time, including without prior notice.</p>
            <p>These Terms of Use ("Terms") govern your access to and use of our software, platform, and related services (the "Service"). By using the Service, you agree to these Terms. If you do not agree, please do not use the Service.</p>
          </Section>

          <Section title="2. Nature of the Service">
            <p>The Service provides automated tools powered by artificial intelligence to create and manage websites and content.</p>
            <p>While we aim to provide a useful and reliable platform, you acknowledge that:</p>
            <ul>
              <li>Content is generated automatically and may contain inaccuracies, errors, or omissions</li>
              <li>The Service is a tool and not a guaranteed business solution</li>
              <li>Results may vary depending on how the Service is used</li>
            </ul>
          </Section>

          <Section title="3. Our Effort">
            <p>We do our best to provide a high-quality service, but the platform is provided "as is" and "as available", without guarantees of any kind.</p>
            <p>In particular, we do not guarantee:</p>
            <ul>
              <li>Continuous availability or uptime of the Service</li>
              <li>That the Service will be error-free or free of bugs</li>
              <li>That any issues will be fixed</li>
              <li>Any specific results, including traffic, rankings, or revenue</li>
              <li>The accuracy or reliability of generated content</li>
            </ul>
            <p>Your use of the Service is at your own risk.</p>
          </Section>

          <Section title="4. Service Availability and Changes">
            <p>We may update, modify, suspend, or discontinue the Service (or any part of it) at any time.</p>
            <p>This includes:</p>
            <ul>
              <li>Adding or removing features</li>
              <li>Changing how the platform works</li>
              <li>Discontinuing the Service entirely</li>
            </ul>
            <p>We are not obligated to maintain the Service indefinitely.</p>
          </Section>

          <Section title="5. Subscriptions and Access">
            <p>Some features of the Service require an active subscription.</p>
            <p>If your subscription expires, is canceled, or cannot be processed, we may:</p>
            <ul>
              <li>Suspend or terminate your access</li>
              <li>Disable or remove hosted websites</li>
              <li>Delete your data and content</li>
            </ul>
            <p>This may happen without prior notice.</p>
          </Section>

          <Section title="6. Hosting and Data Retention">
            <p>If your website is hosted through the Service:</p>
            <ul>
              <li>Hosting is provided on a best-effort basis</li>
              <li>We do not guarantee long-term storage or data retention</li>
              <li>Projects associated with inactive or canceled subscriptions may be removed at any time</li>
            </ul>
            <p>Users are solely responsible for maintaining backups of their content.</p>
            <p>However, users may contact us to request a backup or export of their website and data. While we will make reasonable efforts to accommodate such requests, we do not guarantee that backups will always be available or that requests can be fulfilled in all cases.</p>
          </Section>

          <Section title="7. Data Loss">
            <p>We are not responsible for any loss of data, content, or websites.</p>
            <p>This includes loss resulting from:</p>
            <ul>
              <li>Subscription expiration or cancellation</li>
              <li>System updates or changes</li>
              <li>Bugs or technical issues</li>
              <li>Service interruption or discontinuation</li>
            </ul>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>To the maximum extent permitted by law, we are not liable for:</p>
            <ul>
              <li>Indirect or consequential damages</li>
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Loss of data or content</li>
              <li>Damages caused by errors, bugs, or inaccuracies</li>
              <li>Issues related to generated content</li>
            </ul>
            <p>Our total liability, if any, is limited to the amount you paid for the Service in the previous 30 days.</p>
          </Section>

          <Section title="9. User Responsibility">
            <p>You are responsible for how you use the Service and any content generated.</p>
            <p>You agree to:</p>
            <ul>
              <li>Review and verify content before using or publishing it</li>
              <li>Ensure compliance with applicable laws and regulations</li>
            </ul>
            <p>The Service should not be relied upon for:</p>
            <ul>
              <li>Legal advice</li>
              <li>Medical advice</li>
              <li>Financial decisions</li>
              <li>Or any critical or high-risk use</li>
            </ul>
          </Section>

          <Section title="10. Intellectual Property">
            <p>You retain rights to the content generated through the Service, subject to applicable laws.</p>
            <p>We retain all rights to:</p>
            <ul>
              <li>The software</li>
              <li>The platform</li>
              <li>Underlying technologies</li>
            </ul>
          </Section>

          <Section title="11. Termination">
            <p>We may suspend or terminate your access to the Service at any time, for any reason, including violation of these Terms.</p>
          </Section>

          <Section title="12. Changes to Terms">
            <p>We may update these Terms from time to time.</p>
            <p>Continued use of the Service after changes means you accept the updated Terms.</p>
          </Section>

          <Section title="13. Governing Law">
            <p>These Terms are governed by the laws of Italy.</p>
          </Section>

          <Section title="14. Contact">
            <p>If you have any questions about these Terms, please contact:</p>
            <p><a href="mailto:info@earningsites.net" className="text-primary hover:underline">info@earningsites.net</a></p>
          </Section>
        </div>
      </main>
      <ContactSection hideContact />
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>{title}</h2>
    <div className="space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">{children}</div>
  </section>
);

export default TermsOfUse;
