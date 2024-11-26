package be.thomasmore.bookserver.services;

import be.thomasmore.bookserver.model.Author;
import be.thomasmore.bookserver.model.converters.AuthorDTOConverter;
import be.thomasmore.bookserver.model.converters.AuthorDetailedDTOConverter;
import be.thomasmore.bookserver.model.dto.AuthorDTO;
import be.thomasmore.bookserver.model.dto.AuthorDetailedDTO;
import be.thomasmore.bookserver.repositories.AuthorRepository;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AuthorService {
    @Autowired
    private AuthorRepository authorRepository;

    @Autowired
    private AuthorDTOConverter authorDTOConverter;
    @Autowired
    private AuthorDetailedDTOConverter authorDetailedDTOConverter;

    @Operation(summary = "find all the authors that are stored in the database ")
    public List<AuthorDTO> findAll() {
        final List<Author> authors = authorRepository.findAll();
        return authors.stream()
                .map(a -> authorDTOConverter.convertToDto(a))
                .collect(Collectors.toList());
    }

    public AuthorDetailedDTO findOne(int id) {
        final Optional<Author> author = authorRepository.findById(id);
        if (author.isEmpty())
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                    String.format("Author with id %d does not exist.", id));
        return authorDetailedDTOConverter.convertToDto(author.get());
    }

}
