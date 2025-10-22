'use client';

import { useState, useEffect } from 'react';

const AnimatedServiceNames = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/services?active=true');
        const data = await response.json();

        if (Array.isArray(data)) {
          // Extract just the service names
          const serviceNames = data.map(service => service.title);
          setServices(serviceNames);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="cs_animated_services">
        <div className="cs_service_ticker">
          <span className="cs_service_item">Loading services...</span>
        </div>
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="cs_animated_services">
        <div className="cs_service_ticker">
          <span className="cs_service_item">Healthcare Services</span>
        </div>
      </div>
    );
  }

  // Duplicate services for seamless loop
  const duplicatedServices = [...services, ...services];

  return (
    <div className="cs_animated_services">
      <div className="cs_service_ticker">
        {duplicatedServices.map((service, index) => (
          <span key={index} className="cs_service_item">
            {service}
            {index < duplicatedServices.length - 1 && (
              <span className="cs_service_separator">•</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedServiceNames;

