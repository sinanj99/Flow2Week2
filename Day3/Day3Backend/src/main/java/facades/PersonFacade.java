package facades;

import entities.Person;
import entities.PersonDTO;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;

/**
 *
 * Rename Class to a relevant name Add add relevant facade methods
 */
public class PersonFacade {

    private static PersonFacade instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private PersonFacade() {
    }

    /**
     *
     * @param _emf
     * @return an instance of this facade class.
     */
    public static PersonFacade getPersonFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new PersonFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public List<PersonDTO> getAll() {
        EntityManager em = getEntityManager();
        try {
            return em.createQuery("SELECT new entities.PersonDTO(p) FROM Person p", PersonDTO.class)
                    .getResultList();
        } finally {
            em.close();
        }
    }

    public PersonDTO add(Person p) {
        EntityManager em = getEntityManager();
        em.getTransaction().begin();
        em.persist(p);
        em.getTransaction().commit();
        return new PersonDTO(p);
    }

    public PersonDTO remove(Long id) {
        EntityManager em = getEntityManager();
        Person p = em.find(Person.class, id);
        em.getTransaction().begin();
        em.remove(p);
        em.getTransaction().commit();
        return new PersonDTO(p);
    }

    public PersonDTO update(Person p) {
        EntityManager em = getEntityManager();
        em.getTransaction().begin();
        em.merge(p);
        em.getTransaction().commit();
        return new PersonDTO(p);
    }
}
