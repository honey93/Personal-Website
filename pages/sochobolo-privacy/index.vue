<template>
  <div class="privacy-page">
    <div class="container">

      <div class="privacy-hero">
        <div class="app-badge">
          <span class="app-icon">📖</span>
          <span class="app-name">SochoBolo</span>
        </div>
        <h1 class="privacy-title">Privacy Policy</h1>
        <p class="privacy-subtitle">
          Your trust matters deeply to us. This policy explains clearly what data we collect,
          why we collect it, and how it is protected.
        </p>
        <p class="effective-date">
          <strong>Effective date:</strong> September 7, 2026 &nbsp;·&nbsp;
          <strong>Last updated:</strong> September 7, 2026
        </p>
      </div>

      <!-- TOC -->
      <nav class="toc-card">
        <p class="toc-label">Jump to section</p>
        <ul class="toc-list">
          <li><a href="#overview">1. Overview</a></li>
          <li><a href="#data-collected">2. Data We Collect</a></li>
          <li><a href="#usage">3. How We Use Your Data</a></li>
          <li><a href="#third-parties">4. Third-Party Services</a></li>
          <li><a href="#ads">5. Advertisements (AdMob)</a></li>
          <li><a href="#notifications">6. Notifications</a></li>
          <li><a href="#retention">7. Data Retention</a></li>
          <li><a href="#security">8. Security</a></li>
          <li><a href="#children">9. Children's Privacy</a></li>
          <li><a href="#deletion">10. Data Deletion</a></li>
          <li><a href="#changes">11. Changes to This Policy</a></li>
          <li><a href="#contact">12. Contact Us</a></li>
        </ul>
      </nav>

      <div class="policy-body">

        <!-- 1 -->
        <section id="overview" class="policy-section">
          <h2>1. Overview</h2>
          <p>
            <strong>SochoBolo</strong> ("the App", "we", "our") is an Android application
            developed by Sunita Thakuria (India). The App helps Hindi speakers build confident
            English speaking skills through curated sentences, vocabulary, and daily practice —
            with the tagline <em>"Socho Hindi. Bolo English."</em>
          </p>
          <p>
            SochoBolo is <strong>login-free</strong>. Your learning progress is stored entirely
            on your device and never uploaded to our servers. We do not require an account,
            and we do not collect personally identifiable information to use the core features
            of the App.
          </p>
          <div class="callout callout-green">
            <span class="callout-icon">🔒</span>
            <p>
              We do <strong>not</strong> collect your name, email address, passwords, payment
              details, precise GPS location, contacts, SMS messages, or camera/microphone data.
            </p>
          </div>
        </section>

        <!-- 2 -->
        <section id="data-collected" class="policy-section">
          <h2>2. Data We Collect</h2>

          <div class="data-table-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Data collected</th>
                  <th>Where stored</th>
                  <th>Required?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="badge badge-blue">Progress</span></td>
                  <td>Your name (chosen during onboarding), completed sentences, vocabulary bookmarks, current level, mission progress</td>
                  <td>On-device only (localStorage)</td>
                  <td>Yes (for personalisation)</td>
                </tr>
                <tr>
                  <td><span class="badge badge-green">Reminders</span></td>
                  <td>Reminder on/off status and time preferences for Sentence and Vocabulary channels</td>
                  <td>On-device only (localStorage)</td>
                  <td>Optional</td>
                </tr>
                <tr>
                  <td><span class="badge badge-orange">Ads</span></td>
                  <td>Android Advertising ID (AAID), device model, OS version, coarse location (country-level from IP), ad interaction data</td>
                  <td>Google AdMob servers</td>
                  <td>Optional (free tier only)</td>
                </tr>
                <tr>
                  <td><span class="badge badge-gray">Device</span></td>
                  <td>Language preference (English/Hindi toggle)</td>
                  <td>On-device only (localStorage)</td>
                  <td>Optional</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            All learning data (progress, bookmarks, reminders, name) is stored exclusively in
            your device's local storage under keys prefixed with <code>bc_</code>. This data
            never leaves your device through our systems.
          </p>
        </section>

        <!-- 3 -->
        <section id="usage" class="policy-section">
          <h2>3. How We Use Your Data</h2>
          <ul class="policy-list">
            <li><strong>Personalisation</strong> — your name (entered during onboarding) is displayed in greetings on the Home screen and Profile. It is stored only on your device.</li>
            <li><strong>Progress tracking</strong> — completed sentences, vocabulary, and mission progress are stored on-device to let you pick up where you left off.</li>
            <li><strong>Daily reminders</strong> — reminder preferences (on/off + times) are stored on-device and used to schedule local notifications. No data is sent to external servers for this purpose.</li>
            <li><strong>Advertising</strong> — the Android Advertising ID is shared with Google AdMob to serve banner ads to free-tier users. This is the only data that leaves your device through our App.</li>
          </ul>
        </section>

        <!-- 4 -->
        <section id="third-parties" class="policy-section">
          <h2>4. Third-Party Services</h2>
          <p>
            <strong>SochoBolo</strong> integrates the following third-party services. Each has
            its own privacy policy governing how they handle your data:
          </p>

          <ul class="policy-list">
            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Play Services</a></li>
            <li><a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener">Google AdMob</a></li>
          </ul>

          <div class="third-party-grid">
            <div class="third-party-card">
              <div class="tp-header">
                <span class="tp-icon">📱</span>
                <strong>Google Play Services</strong>
              </div>
              <p>Core Android services required for app distribution, updates, and device integrity checks.</p>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy →</a>
            </div>

            <div class="third-party-card">
              <div class="tp-header">
                <span class="tp-icon">📢</span>
                <strong>Google AdMob</strong>
              </div>
              <p>Serves banner advertisements to free-tier users. May use the Android Advertising ID to show relevant ads. See Section 5 for full details.</p>
              <a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener">AdMob Privacy →</a>
            </div>
          </div>

          <p class="tp-note">
            We do not integrate Google Sign-In, Facebook, TikTok, Snapchat, Firebase Analytics,
            or any social media tracking SDKs. SochoBolo requires no account and sends no
            personal data to our servers.
          </p>
        </section>

        <!-- 5 -->
        <section id="ads" class="policy-section">
          <h2>5. Advertisements (Google AdMob)</h2>
          <p>
            Free-tier users see a single banner ad displayed above the bottom navigation bar.
            The App uses <strong>Google AdMob</strong> (a Google LLC service) to serve ads.
            AdMob may collect and use:
          </p>
          <ul class="policy-list">
            <li>Android Advertising ID (AAID)</li>
            <li>General device information (model, OS version)</li>
            <li>Coarse location (country-level, derived from IP address)</li>
            <li>Ad interaction data (impressions, taps)</li>
          </ul>
          <p>
            You can opt out of personalised advertising at any time:
            <strong>Android Settings → Privacy → Ads → Opt out of Ads Personalisation.</strong>
          </p>
          <p>
            For more information on how Google uses this data, see the
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">
              Google Advertising Privacy Policy</a>.
          </p>
        </section>

        <!-- 6 -->
        <section id="notifications" class="policy-section">
          <h2>6. Notifications</h2>
          <p>
            SochoBolo offers optional daily reminders for <strong>Sentence</strong> and
            <strong>Vocabulary</strong> practice. These are <strong>local notifications</strong>
            scheduled entirely on your device — no data is sent to external servers to trigger them.
          </p>
          <ul class="policy-list">
            <li>Reminder preferences (on/off + time) are stored in your device's local storage under the <code>bc_notif</code> key.</li>
            <li>The App will request notification permission before scheduling reminders.</li>
            <li>You can disable reminders at any time from Profile → Daily practice reminders, or from your device's notification settings.</li>
          </ul>
        </section>

        <!-- 7 -->
        <section id="retention" class="policy-section">
          <h2>7. Data Retention</h2>
          <ul class="policy-list">
            <li><strong>On-device data</strong> — your progress, name, bookmarks, and preferences remain on your device until you uninstall the App or clear the App's storage in Android Settings.</li>
            <li><strong>Ad data</strong> — data collected by Google AdMob is subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google's retention policies</a>.</li>
          </ul>
          <p>
            Because SochoBolo does not operate user accounts or a backend database, there is
            no server-side data for us to delete on request. Uninstalling the App removes all
            locally stored data.
          </p>
        </section>

        <!-- 8 -->
        <section id="security" class="policy-section">
          <h2>8. Security</h2>
          <ul class="policy-list">
            <li>All on-device data is stored in Android's sandboxed app storage — inaccessible to other apps without root access.</li>
            <li>We do not transmit your learning data, name, or preferences to any server.</li>
            <li>Ad-related network traffic to Google AdMob is transmitted over HTTPS (TLS).</li>
          </ul>
        </section>

        <!-- 9 -->
        <section id="children" class="policy-section">
          <h2>9. Children's Privacy</h2>
          <p>
            The App is not directed at children under the age of 13. We do not knowingly
            collect personal information from children under 13. The App does not require
            account creation or collection of any personally identifiable information for
            its core features. If you believe a child under 13 is using the App and you
            have concerns, please contact us at
            <a href="mailto:gitaforgrowth.app@gmail.com">gitaforgrowth.app@gmail.com</a>.
          </p>
        </section>

        <!-- 10 -->
        <section id="deletion" class="policy-section">
          <h2>10. Data Deletion</h2>

          <div class="callout callout-blue">
            <span class="callout-icon">🗑️</span>
            <div>
              <p><strong>To remove all SochoBolo data from your device:</strong></p>
              <p>
                Go to <strong>Android Settings → Apps → SochoBolo → Storage → Clear Data</strong>,
                or simply uninstall the App. This removes all locally stored progress,
                preferences, and your entered name.
              </p>
            </div>
          </div>

          <p>
            Because SochoBolo is login-free and stores no data on our servers, there is no
            account to delete and no server-side data to request removal of. If you have any
            questions, contact us at
            <a href="mailto:gitaforgrowth.app@gmail.com">gitaforgrowth.app@gmail.com</a>.
          </p>
        </section>

        <!-- 11 -->
        <section id="changes" class="policy-section">
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will update
            the "Last updated" date at the top of this page. For significant changes, we will
            notify you via an in-app notification. Continued use of the App after changes
            constitutes acceptance of the updated policy.
          </p>
        </section>

        <!-- 12 -->
        <section id="contact" class="policy-section">
          <h2>12. Contact Us</h2>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy:</p>
          <div class="contact-card">
            <div class="contact-row">
              <span class="contact-label">Developer</span>
              <span>Sunita Thakuria</span>
            </div>
            <div class="contact-row">
              <span class="contact-label">Email</span>
              <a href="mailto:gitaforgrowth.app@gmail.com">gitaforgrowth.app@gmail.com</a>
            </div>
            <div class="contact-row">
              <span class="contact-label">App</span>
              <span>SochoBolo — Socho Hindi. Bolo English.</span>
            </div>
            <div class="contact-row">
              <span class="contact-label">Platform</span>
              <span>Android (Google Play)</span>
            </div>
            <div class="contact-row">
              <span class="contact-label">Country</span>
              <span>India</span>
            </div>
          </div>
        </section>

      </div><!-- /policy-body -->

    </div><!-- /container -->
  </div><!-- /privacy-page -->
</template>

<script>
export default {
  layout: "blank",
  head() {
    return {
      title: "Privacy Policy — SochoBolo",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Privacy Policy for SochoBolo Android app. Learn how we collect, use and protect your data. SochoBolo is a login-free Hindi to English speaking app.",
        },
        { name: "robots", content: "index, follow" },
      ],
    };
  },
};
</script>

<style scoped>
/* ── Page shell ──────────────────────────────────────────────────────────── */
.privacy-page {
  background: var(--bg, #ffffff);
  min-height: 100vh;
  padding: 2.5rem 0 5rem;
}

.container {
  max-width: 820px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

/* ── Hero ────────────────────────────────────────────────────────────────── */
.privacy-hero {
  text-align: center;
  padding: 2.5rem 0 2rem;
  border-bottom: 1px solid var(--border, #eef0f3);
  margin-bottom: 2rem;
}

.app-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 999px;
  padding: 0.3rem 1rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #1d4ed8;
}

.app-icon { font-size: 1.1rem; }

.privacy-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--text, #111827);
  margin: 0 0 0.75rem;
}

.privacy-subtitle {
  font-size: 1.05rem;
  color: var(--text-subtle, #6b7280);
  max-width: 560px;
  margin: 0 auto 1rem;
  line-height: 1.7;
}

.effective-date {
  font-size: 0.82rem;
  color: var(--text-faint, #9ca3af);
}

/* ── TOC ─────────────────────────────────────────────────────────────────── */
.toc-card {
  background: var(--bg-elev, #fafbfc);
  border: 1px solid var(--border, #eef0f3);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 2.5rem;
}

.toc-label {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-subtle, #6b7280);
  margin: 0 0 0.75rem;
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.3rem 1rem;
}

.toc-list a {
  font-size: 0.88rem;
  color: var(--accent, #1f93ef);
  text-decoration: none;
}

.toc-list a:hover { text-decoration: underline; }

/* ── Policy body ─────────────────────────────────────────────────────────── */
.policy-section {
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--border-soft, #f1f1f1);
}
.policy-section:last-child { border-bottom: none; }

.policy-section h2 {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text, #111827);
  margin: 0 0 1rem;
  scroll-margin-top: 80px;
}

.policy-section h3 {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-muted, #374151);
  margin: 1.25rem 0 0.5rem;
}

.policy-section p {
  color: var(--text-muted, #374151);
  line-height: 1.8;
  margin: 0 0 0.75rem;
}

.policy-list {
  color: var(--text-muted, #374151);
  line-height: 1.8;
  padding-left: 1.25rem;
  margin: 0 0 0.75rem;
}

.policy-list li { margin-bottom: 0.4rem; }

.policy-section a {
  color: var(--accent, #1f93ef);
  text-decoration: none;
}
.policy-section a:hover { text-decoration: underline; }

code {
  font-family: monospace;
  font-size: 0.85em;
  background: var(--bg-elev, #fafbfc);
  border: 1px solid var(--border, #eef0f3);
  border-radius: 4px;
  padding: 0.1em 0.4em;
  color: var(--text-muted, #374151);
}

/* ── Data table ──────────────────────────────────────────────────────────── */
.data-table-wrapper {
  overflow-x: auto;
  margin: 1rem 0;
  border-radius: 10px;
  border: 1px solid var(--border, #eef0f3);
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
}

.data-table th {
  background: var(--bg-elev, #fafbfc);
  padding: 0.65rem 1rem;
  text-align: left;
  font-weight: 600;
  color: var(--text-subtle, #6b7280);
  border-bottom: 1px solid var(--border, #eef0f3);
}

.data-table td {
  padding: 0.65rem 1rem;
  border-bottom: 1px solid var(--border-soft, #f1f1f1);
  color: var(--text-muted, #374151);
  vertical-align: top;
}

.data-table tr:last-child td { border-bottom: none; }

.badge {
  display: inline-block;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
}
.badge-blue   { background: #eff6ff; color: #1d4ed8; }
.badge-green  { background: #f0fdf4; color: #166534; }
.badge-orange { background: #fff7ed; color: #9a3412; }
.badge-gray   { background: #f9fafb; color: #374151; }

/* ── Callout ─────────────────────────────────────────────────────────────── */
.callout {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  border-radius: 10px;
  padding: 0.9rem 1.1rem;
  margin: 1rem 0;
}
.callout p { margin: 0; }
.callout-icon { font-size: 1.2rem; flex-shrink: 0; }

.callout-green  { background: #f0fdf4; border: 1px solid #bbf7d0; }
.callout-blue   { background: #eff6ff; border: 1px solid #bfdbfe; }

/* ── Third-party grid ────────────────────────────────────────────────────── */
.third-party-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.third-party-card {
  background: var(--bg-elev, #fafbfc);
  border: 1px solid var(--border, #eef0f3);
  border-radius: 10px;
  padding: 1rem;
}

.tp-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.tp-icon { font-size: 1.1rem; }

.third-party-card p {
  font-size: 0.88rem;
  margin: 0 0 0.5rem;
}

.third-party-card a {
  font-size: 0.82rem;
  color: var(--accent, #1f93ef);
  text-decoration: none;
}

.tp-note {
  font-size: 0.85rem;
  color: var(--text-subtle, #6b7280);
  margin-top: 0.75rem;
}

/* ── Contact card ────────────────────────────────────────────────────────── */
.contact-card {
  background: var(--bg-elev, #fafbfc);
  border: 1px solid var(--border, #eef0f3);
  border-radius: 10px;
  overflow: hidden;
  margin-top: 1rem;
}

.contact-row {
  display: flex;
  gap: 1rem;
  padding: 0.65rem 1rem;
  border-bottom: 1px solid var(--border-soft, #f1f1f1);
  font-size: 0.9rem;
}
.contact-row:last-child { border-bottom: none; }

.contact-label {
  font-weight: 600;
  color: var(--text-subtle, #6b7280);
  min-width: 90px;
}

/* ── Responsive ──────────────────────────────────────────────────────────── */
@media (max-width: 600px) {
  .privacy-title { font-size: 1.6rem; }
  .toc-list { grid-template-columns: 1fr; }
  .third-party-grid { grid-template-columns: 1fr; }
  .data-table { font-size: 0.8rem; }
}
</style>
