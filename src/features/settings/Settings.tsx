import { useState } from "react";
import { useTranslation } from "react-i18next";
import { supportedLngs } from "../../i18n";
import { Text, Button, FormField, Panel, Checkbox } from "../../design-system";

const languageNames: Record<string, string> = {
  en: "English",
  es: "Español",
};

function Settings() {
  const { t, i18n } = useTranslation();
  const [notifications, setNotifications] = useState({
    updates: false,
    promotions: false,
    alerts: false,
  });

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="view">
      <Text variant="title">{t("settings.title")}</Text>

      <Panel>
        <FormField label={t("settings.language")}>
          <select
            className="field-input"
            value={i18n.resolvedLanguage}
            onChange={(event) => i18n.changeLanguage(event.target.value)}
          >
            {supportedLngs.map((lng) => (
              <option key={lng} value={lng}>
                {languageNames[lng]}
              </option>
            ))}
          </select>
        </FormField>

        <div className="settings-actions">
          <Button variant="secondary">{t("settings.signOut")}</Button>
        </div>
      </Panel>

      <Panel title={t("settings.notifications")}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <Checkbox
            label={t("settings.updates")}
            checked={notifications.updates}
            onChange={() => handleNotificationChange("updates")}
          />
          <Checkbox
            label={t("settings.promotions")}
            checked={notifications.promotions}
            onChange={() => handleNotificationChange("promotions")}
          />
          <Checkbox
            label={t("settings.alerts")}
            checked={notifications.alerts}
            onChange={() => handleNotificationChange("alerts")}
          />
        </div>
      </Panel>

      <Text variant="legal">
        DPay is a company in the money sector, not a bank. Banking services are provided by partner banks, Members FDIC.
      </Text>
    </div>
  );
}

export default Settings;
