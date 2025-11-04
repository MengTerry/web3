import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone, ExternalLink, Leaf, Microscope, Activity, Sprout, Smartphone } from 'lucide-react';

interface FooterProps {
  onNavigate?: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
  const partners = [
    {
      name: 'Aberystwyth University',
      logo: '/logos/au-logo.svg',
      url: 'https://www.aber.ac.uk/'
    },
    {
      name: 'IBERS',
      logo: '/logos/ibers-logo.png',
      url: 'https://www.aber.ac.uk/en/ibers/'
    },
    {
      name: 'Welsh Government',
      logo: '/logos/welsh-logo.jpg',
      url: 'https://gov.wales/'
    }
  ];

  const quickLinks = [
    { label: t('nav.home'), section: 'home' },
    { label: t('nav.projects'), section: 'projects' },
    { label: t('nav.team'), section: 'team' },
    { label: t('nav.research'), section: 'research' },
  ];

  const researchAreas = [
    { label: 'AI & Computer Vision', icon: Microscope },
    { label: 'Plant Pathology', icon: Leaf },
    { label: 'Precision Agriculture', icon: Activity },
    { label: 'Sustainable Farming', icon: Sprout },
    { label: 'Mobile Applications', icon: Smartphone },
  ];

  return (
    <footer className="bg-white text-emerald-900 border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logos/main-logo.png"
                alt="DeepDetect Logo"
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent">
                DeepDetect
              </h3>
            </div>
            <p className="text-emerald-700 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.section}>
                  <a
                    href={`#${link.section}`}
                    onClick={(event) => {
                      event.preventDefault();
                      onNavigate?.(link.section);
                    }}
                    className="text-emerald-600 hover:text-emerald-800 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-emerald-700 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t('footer.location')}</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-700 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:aig15@aber.ac.uk" className="hover:text-emerald-900 transition-colors">
                  aig15@aber.ac.uk
                </a>
              </li>
              <li className="flex items-center gap-2 text-emerald-700 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+44 (0) 1970 622350</span>
              </li>
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.researchFocus')}</h4>
            <ul className="space-y-2 text-emerald-700 text-sm">
              {researchAreas.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-emerald-500" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="border-t border-emerald-100 pt-8 mb-8">
          <h4 className="text-center text-lg font-semibold mb-6">{t('footer.partners')}</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <motion.a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-white rounded-xl p-6 border border-emerald-100 hover:shadow-xl transition-all duration-300 w-full max-w-xs"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-emerald-500" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-emerald-600 text-sm">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <div className="flex gap-6 text-sm text-emerald-600">
            <a href="#privacy" className="hover:text-emerald-900 transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#terms" className="hover:text-emerald-900 transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#accessibility" className="hover:text-emerald-900 transition-colors">
              {t('footer.accessibility')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
